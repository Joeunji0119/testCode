import React from 'react';
import { createRoot } from 'react-dom/client';
import { Suspense } from 'react';

const LazyRouter = React.lazy(() => import('./Router'));

const App: React.FC = () => (
	<Suspense fallback={<div>Loading...</div>}>
		<LazyRouter />
	</Suspense>
);

const root = createRoot(document.getElementById('root'));
root.render(<App />);
