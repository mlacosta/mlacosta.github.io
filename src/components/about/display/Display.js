import React from 'react';
import './Display.css';
import './visor/Visor';
import Visor from './visor/Visor';
import Selector from './selector/Selector';
import ProfilePic from '../../profilePic/profilePic';
import selectors from '../display/selector/selectors'

class Display extends React.Component{

    constructor(props){

        super(props);

        let {title, description, menu} = selectors[0].visor;

        this.state = {
            selectors:selectors,
            currentBox: selectors[0].title,
            visor:{title, description, menu},
            boxes: selectors.map((value)=>{return value.title}),
        }

        this.handleHover = this.handleHover.bind(this);
    }

    handleHover(boxTitle, visor){
        return ()=>{
            this.setState({
                currentBox: boxTitle,
                visor }
            )
        }
    }

    render(){
        let { colors } = this.props;

        let style = {
            border: `1px solid ${colors.border}`,
            color: colors.text02
        }

        let { selectors, currentBox, visor } = this.state;

        return(
            <div className="display" style = {style}>
                <Selector colors = {colors} 
                          onHover = {this.handleHover}
                          selectors = {selectors}
                          currentBox = {currentBox}/>
                <Visor 
                    colors = {colors}
                    visor = {visor}
                    currentBox = {currentBox}/>
            </div>
        )
    }
}

export default Display;