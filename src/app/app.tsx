// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <NxWelcome title={process.env.NX_TASK_TARGET_PROJECT || 'process.env.NX_TASK_TARGET_PROJECT Not Found'} />
    </div>
  );
}

export default App;
