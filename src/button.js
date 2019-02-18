import React,{Component} from 'react';
import './button.css';
export default class Button extends Component{
    constructor(props){
        super(props);
        this.state ={
            active:false,
            deltaX:0,
            deltaY:0,
        };
        this.btnRef = React.createRef();
    }
    render(){
        return(
            <button ref={this.btnRef} className="button" onClick={this.btnClick.bind(this)}>
                <span className="value">{this.props.value||'按钮'}</span>
                {this.state.active === true?
                    (<span className="circle"
                           onAnimationEnd={this.btnAnimationEnd.bind(this)}
                           style={{ left: this.state.deltaX, top: this.state.deltaY }}
                    />)
                    :''}
            </button>
        );
    }
    btnClick(e){
        let { left, top } = this.btnRef.current.getBoundingClientRect();
        let { clientX, clientY } = e;
        let deltaX = clientX - left - 5;
        let deltaY = clientY - top - 5;
        this.setState({
            active: true,
            deltaX: deltaX,
            deltaY: deltaY,
        });
        console.log('里面的函数');
        this.props.onClick && this.props.onClick.call(null, e);
    };
    btnAnimationEnd() {
        this.setState({
            active: false,
        });
    }
}