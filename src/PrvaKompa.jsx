import withCount from './withCount'

const PrvaKompa = ({count, increment}) => {
  return (
    <>
        <div>{count}</div>
        <button onClick={increment}>Increment</button>
    </>
  )
}

export default withCount(PrvaKompa)