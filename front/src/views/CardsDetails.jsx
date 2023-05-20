import React from "react";
import Detail from "../components/Detail/Detail"
import { useParams} from "react-router-dom";


export default function CardDetails (props){
    
    const {detailId} = useParams()
    return (
        <>
        <Detail detailId = {detailId}/>
        </>
    )
}
