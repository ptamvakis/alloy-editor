import ButtonCommand from '../base/button-command.js';
import ButtonIcon from './button-icon.jsx';
import ButtonStateClasses from '../base/button-state-classes.js';
import ButtonStyle from '../base/button-style.js';
import React from 'react';

/**
 * The ButtonSuperscript class provides functionality for applying superscript style to a text selection.
 *
 * @class ButtonSuperscript
 *
 * @uses ButtonCommand
 * @uses ButtonStateClasses
 * @uses ButtonStyle
 */
class ButtonSuperscript extends React.Component {
	/**
	 * Lifecycle. Returns the default values of the properties used in the widget.
	 *
	 * @instance
	 * @memberof ButtonSuperscript
	 * @method getDefaultProps
	 * @return {Object} The default properties.
	 */
	static defaultProps = {
		command: 'superscript',
		style: 'coreStyles_superscript',
	};

	/**
	 * The name which will be used as an alias of the button in the configuration.
	 *
	 * @default superscript
	 * @memberof ButtonSuperscript
	 * @property {String} key
	 * @static
	 */
	static key = 'superscript';

	/**
	 * Lifecycle. Renders the UI of the button.
	 *
	 * @instance
	 * @memberof ButtonSuperscript
	 * @method render
	 * @return {Object} The content which should be rendered.
	 */
	render() {
		const cssClass = `ae-button ${this.getStateClasses()}`;

		return (
			<button
				aria-label={AlloyEditor.Strings.superscript}
				aria-pressed={cssClass.indexOf('pressed') !== -1}
				className={cssClass}
				data-type="button-superscript"
				onClick={this.execCommand}
				tabIndex={this.props.tabIndex}
				title={AlloyEditor.Strings.superscript}>
				<ButtonIcon editor={this.props.editor} symbol="superscript" />
			</button>
		);
	}
}

export default ButtonCommand(
	ButtonStateClasses(ButtonStyle(ButtonSuperscript))
);
