import { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { classNames } from '../helpers/classNames/classNames'
import { AboutPageLazy } from './pages/AboutPage/AboutPage.async'
import { MainPageLazy } from './pages/MainPage/MainPage.async'
import './styles/index.scss'
import { useTheme } from './theme/useTheme'


const App = () => {	

	const {theme, toggleTheme} = useTheme();
	
	return ( 
		<div className={classNames('app', {}, [theme])}>
			<Link to={'/about'} >about</Link>
			<Link  to={'/'} >MainPAGE</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path='/about' element={<AboutPageLazy />} />
					<Route path='/' element={<MainPageLazy />}  />
				</Routes>
			</Suspense> 
			<button onClick={toggleTheme}>Тема</button>
		</div>
	)
}

export default App