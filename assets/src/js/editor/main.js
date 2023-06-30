import CancelSubscriptionAction from './CancelSubscriptionAction';

const {
	      addAction,
      } = JetFBActions;

addAction(
	'update_gw_subscription',
	CancelSubscriptionAction,
);
