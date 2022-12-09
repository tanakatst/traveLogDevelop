import React, {useState} from "react";
import { Box, Button, Typography } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { Label } from "@mui/icons-material";
import { isNumber } from "util";

export const PhotoUpload = ({name,photos,setPhotos}: {name:string, photos:File[], setPhotos:React.Dispatch<React.SetStateAction<File[]>>})=>{

    // エラーステートの定義(同じファイル、ファイル数上限越え、ファイルの種類（写真ファイル以外の除去）　でエラーをステート保持する。)
    const [isSameError, setIsSameError ] = useState(false)
    const [isNumberError, setIsNumberError] = useState(false)
    const [isFileTypeError, setIsFileTypeError] = useState(false)

    // エラーの初期化をする関数の定義
    const resetErrors = () =>{
        setIsSameError(false)
        setIsNumberError(false)
        setIsFileTypeError(false)
    }
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>)=>{
        console.log('あいうえお')
        console.log(e.target.files?.length)
        if(e.target.files === null || e.target.files.length ===0){
            return;
        }
        // 配列の結合(ファイルの配列作成)
        const files = Object.values(e.target.files).concat();
        e.target.value = "";
        // 後に定義する関数
        console.log(files)
        resetErrors();

        // 写真ファイルの取り出し:ファイルの配列からの取り出し
        const pickedPhotos = files.filter((file) =>{
            // タイプ（拡張子）によるエラーのハンドリング
            if(
                ![
                    "image/gif",
                    "image/jpeg",
                    "image/png",
                    "image/bmp",
                    "image/svg+xml",
                ].includes(file.type)
            ){
                // ファイルのタイプによるエラーハンドリング
                setIsFileTypeError(true)
                return false;
            }
            // サイズによるエラーハンドリング(setSameErrorのハンドリング)
            const existsSameSize = photos.some((photo) => photo.size === file.size);
            if(existsSameSize){
                setIsSameError(true);
                return false;
            }
            return true;
        });
        // 画像投稿されていない時は何も返さない。
        if(pickedPhotos.length === 0){
            return
        }
        //
        const concatPhotos =photos.concat(pickedPhotos);
        console.log(concatPhotos)
        if(concatPhotos.length >= 4){
            setIsNumberError(true);
        }
        // エラーを表示させて、1~ 3枚分のみ表示する。
        setPhotos(concatPhotos.slice(0,3));
    };


    // 画像登校キャンセル関数
    const handleCancel = (photoIndex: number) =>{
        if(confirm('この画像を削除してもよろしいですか')){
            resetErrors();
            // 修正後の画像ファイルの配列を定義
            const modifyPhotos = photos.concat();
            // photoINdex(選択した画像のインデックス番号の写真尾削除)
            modifyPhotos.splice(photoIndex, 1);
            // Photosの修正（更新）
            setPhotos(modifyPhotos)

        }
    };
    return(
        <>
            <Box width={200} height={300}>
                {/* ここが出力されていない。 */}
                {[...Array(3).map((_: number,index:number)=>
                index <photos.length? (
                    <>
                        <Typography>あるよ-ん</Typography>
                        <Button
                        type="button"
                        key={index}
                        onClick ={() => handleCancel(index)}
                        >
                            <img style={{width:100, height:100}}
                            src={URL.createObjectURL(photos[index])}
                            alt={`投稿の写真 ${index + 1}`}
                            />
                        </Button>
                    </>

                )
                :
                (

                    <Typography>なんも無いよーん</Typography>
                )
                )]}
                {isSameError && (
                    <Typography>既に選択した画像を含んでいます。</Typography>
                )}
                {isNumberError && (
                    <Typography>3枚以上画像を投稿する事ができません。</Typography>
                )}
                {isFileTypeError && (
                    <Typography>写真ファイル(※jpeg, png, bmp, gif, svg)の画像を投稿してください。</Typography>
                )}
            </Box>
            <Typography>画像は最大3枚までです。</Typography>
            <Button variant="contained" component="label" endIcon= {<AddPhotoAlternateIcon />}>
                Upload
                <input hidden accept="image/*" multiple type="file" onChange = {e => changeHandler(e)}/>
            </Button>
        </>
    )
}

