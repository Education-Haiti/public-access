import React from 'react';

const WidePanel = (props) => (
	<div className={"wide-panel-container column " + props.panel.tag}>
		<div className="wide-panel column">
			<div className="heading">{props.panel.label}</div>
			<p>{props.panel.description}</p>
			<button className="become-mentor-button" onClick={ ()=> props.onClick(3) }>{props.panel.buttonContent}</button>
		</div>
	</div>
)

export default WidePanel;
