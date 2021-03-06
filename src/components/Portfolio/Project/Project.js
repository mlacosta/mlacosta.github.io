import React from 'react';
import './Project.css';
import {AiFillStar} from 'react-icons/ai'

export default function Project( {value, colors, num }){

	let { name, url, github, description, tools, photo} = value;
	let descStyle = {
		color: colors.text02
	}

	let style = {
		flexDirection: ( num % 2 ) ? 'row': 'row-reverse',
		borderColor: colors.border,
		backgroundColor: colors.boxColor,
	}
	return( 	
		<div className="project" style={style}>
			<div className="work-info">
				<h2 className='work-name' style={{color:colors.text01, textAlign:'left'}}>{name}</h2>
				<div className="work-description" style={descStyle}>
					{description}
					<div className="project-tools">Tools: {tools}</div>
					<a class="fab fa-github" src={github} target='_blank'></a>
					<a class="fas fa-code-branch" target='_blank'></a>
					<span><AiFillStar style={{position:'relative', top:3,left:0}}/>   Featured</span>
				</div>
				
			</div>
			<a classname = 'portfolio-img-link' href={url} target='_blank'><img className='portfolio-img'src={photo} alt=""/></a>
		</div> 
	) 
}
