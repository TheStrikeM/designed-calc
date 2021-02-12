import Calculator from './components/Calculator';
import {useDispatch, useSelector} from 'react-redux'

function App() {

  const {result, theme, example} = useSelector(({result, theme}) => {
    return {
      result: result.result,
      example: result.example,
      theme: theme.theme
    }
  })
  const dispatch = useDispatch()

  return (
    <>
      <Calculator result={result} theme={theme} example={example} dispatch={dispatch} />
    </>
  );
}

export default App;
