import { Circle } from "react-circle";


const ProgressBar = (props: { persantage: number; })=> {
    const commitPersent = props.persantage
    return(
        <div style={{marginTop: "50px", textAlign: "center"}}>
            <Circle
            progress={commitPersent}           //進捗率
            size="100px"            //円グラフのサイズ
            lineWidth="20px"        //円グラフの線幅
            progressColor="blue"    //進捗の色
            bgColor="#D3DEF1"       //残部分の色
            textColor="blue"        //進捗文字の色
            />

      </div>
    )
}
export default ProgressBar
