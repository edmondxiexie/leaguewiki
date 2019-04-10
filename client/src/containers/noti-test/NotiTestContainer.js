import { connect } from 'react-redux';
import { notify } from 'reapop';

import NotiTest from 'Components/noti-test/NotiTest';

export default connect(null, { notify })(NotiTest);
