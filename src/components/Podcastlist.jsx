import React,  {Component} from "react";
import Podcast from "./Podcast";
import Card from "./Card";

class Podcastlist extends Component{



    render(){
        return(
            <div>
                <Card>
                    <Podcast/>
                </Card>
            </div>
        )

    }
}

export default Podcastlist;