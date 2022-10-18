import React, { Component , useEffect, useRef, useState } from 'react'
import geoJson from '../../../data/geo.json'
import * as d3 from 'd3'
import { http } from '../../../api/axios.csrf';
import ProgressBar from './progressBar';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import theme from '../../../../styles/mui/theme';


const Map=()=>{
    const [postsPref, setPostPref] = useState([])
    const noDuplicatedPrefSet = new Set(postsPref);

    const noDuplicatedPrefArr = Array.from(noDuplicatedPrefSet)
    const isFirstRender= useRef(false);

    // Post情報 から　行ったことのあるprefecture情報を取得
    const getPrefecture = ()=>{
        http.get('/sanctum/csrf-cookie')
        .then(async response=>{
            const{ data } = await  http.get('/api/getPosts')
            setPostPref(data.map(post=>{
                return post.prefecture
            }))
        })

    }

    useEffect(()=>{
        isFirstRender.current = true
        getPrefecture()
    },[])



    useEffect(()=>{
        if(isFirstRender.current){
            isFirstRender.current = false
        }else{
            drawmap()
        }
    },[postsPref])

    // 行ったことのある県のパーセント計算
    const digit = 1
    const commitPersent = parseFloat((noDuplicatedPrefArr.length /47 *100).toFixed(digit))

    const drawmap = () =>{
                const width = 800; // 描画サイズ: 幅
                const height = 800; // 描画サイズ: 高さ
                const centerPos = [137.0, 38.2]; // 地図のセンター位置
                const scale = 1600; // 地図のスケール

                // 地図の投影設定
                const projection = d3
                .geoMercator()
                .center(centerPos)
                .translate([width / 2, height / 2])
                .scale(scale);

        // 地図をpathに投影(変換)
        const path = d3.geoPath().projection(projection);

        // SVG要素を追加
        const svg = d3
        .select(`.div`)
        .append(`svg`)
        .attr(`viewBox`, `0 0 ${width} ${height}`)
        .attr(`width`, `100%`)
        .attr(`height`, `100%`);

        //
        // [ メモ ]
        // 動的にGeoJsonファイルを読み込む場合は以下のコードを使用
        // const geoJson = await d3.json(`/japan.geo.json`);
        //

        // 都道府県の領域データをpathで描画
        svg
        .selectAll(`path`)
        .data(geoJson.features)
        .enter()
        .append(`path`)
        .attr(`d`, path)
        .attr('id', item=>{
            return item.properties.name_ja
          })
          .attr(`stroke`, `#666`)
          .attr(`strokeWidth`, 0.25)
          .attr(`fill`, item =>{
              if(noDuplicatedPrefArr.includes(item.properties.name_ja)){
                  return '#00897b'
              }else{
                  return '#fff'
              }

          })
          .attr(`fill-opacity`,1.0)
        }

        return(
            <>
                <Box flexGrow={1}>
                    <Grid container spacing={2}>
                        <Grid item xs={8} sx={{backgroundColor: 'primary.light', borderRadius:8, marginRight:12}}>
                                <div className='div'>
                                </div>
                        </Grid>
                        <Grid item xs={3}sx={{backgroundColor: 'primary.light', borderRadius:8, alignItems:'center'}}>
                                <div style={{marginTop:150}}>
                                    <ProgressBar className='mx-auto'  persantage={commitPersent}/>
                                        <p className="text-center">あなたの達成率は</p>
                                        <h1 className='text-5xl font-bold text-center mt-11'>{commitPersent}％です</h1>
                                </div>
                        </Grid>
                    </Grid>
                </Box>
            </>
        )

    }
export default Map;
