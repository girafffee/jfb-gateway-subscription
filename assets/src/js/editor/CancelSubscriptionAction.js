const {
	      SelectControl,
      } = wp.components;
const {
	      Tools,
      } = JetFBActions;
const {
	      useFields,
      } = JetFBHooks;

const {
	      __,
      } = wp.i18n;

function CancelSubscriptionAction( {
	settings,
	onChangeSettingObj,
} ) {
	const fields = useFields( { withInner: false }, [] );

	return <SelectControl
		label={ __( 'Field with subscription id', 'jet-form-builder' ) }
		labelPosition="side"
		value={ settings.field }
		options={ Tools.withPlaceholder(
			fields,
			__( 'Select field...', 'jet-form-builder',
			) ) }
		onChange={ field => onChangeSettingObj( { field } ) }
	/>;
}

export default CancelSubscriptionAction;