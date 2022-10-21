import { Circle } from "react-circle";


const ProgressBar = (props: { persantage: number; })=> {
    const commitPersent = props.persantage
    return(
        <div className="flex justify-center" style={{margin:'auto', textAlign: "center", paddingRight:9, width:40}}>
            <div className="flex-1">
                <Circle
                progress={commitPersent}           //進捗率
                size="150px"            //円グラフのサイズ
                lineWidth="20px"        //円グラフの線幅
                progressColor="blue"    //進捗の色
                bgColor="#D3DEF1"       //残部分の色
                textColor="blue"       //進捗文字の色
                />
            </div>

      </div>
    )
}
export default ProgressBar
