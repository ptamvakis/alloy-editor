import ButtonCommand from '../base/button-command.js';
import ButtonIcon from './button-icon.jsx';
import ButtonStateClasses from '../base/button-state-classes.js';
import ButtonStyle from '../base/button-style.js';
import React from 'react';

/**
 * The ButtonStrike class styles a selection with strike style.
 *
 * @class ButtonStrike
 * @uses ButtonCommand
 * @uses ButtonStateClasses
 * @uses ButtonStyle
 */
class ButtonStrike extends React.Component {
	/**
	 * Lifecycle. Returns the default values of the properties used in the widget.
	 *
	 * @instance
	 * @memberof ButtonStrike
	 * @method getDefaultProps
	 * @return {Object} The default properties.
	 */
	static defaultProps = {
		command: 'strike',
		style: 'coreStyles_strike',
	};

	/**
	 * The name which will be used as an alias of the button in the configuration.
	 *
	 * @default strike
	 * @memberof ButtonStrike
	 * @property {String} key
	 * @static
	 */
	static key = 'strike';

	/**
	 * Lifecycle. Renders the UI of the button.
	 * @instance
	 * @memberof ButtonStrike
	 * @method render
	 * @return {Object} The content which should be rendered.
	 */
	render() {
		const cssClass = `ae-button ${this.getStateClasses()}`;

		return (
			<button
				aria-label={AlloyEditor.Strings.strike}
				aria-pressed={cssClass.indexOf('pressed') !== -1}
				className={cssClass}
				data-type="button-strike"
				onClick={this.execCommand}
				tabIndex={this.props.tabIndex}
				title={AlloyEditor.Strings.strike}>
				<ButtonIcon editor={this.props.editor} symbol="strikethrough" />
			</button>
		);
	}
}

export default ButtonCommand(ButtonStateClasses(ButtonStyle(ButtonStrike)));
