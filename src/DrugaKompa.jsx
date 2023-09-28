import withCount from './withCount'

const DrugaKompa = ({count, increment}) => {
  return (
    <>
        <div>{count}</div>
        <button onClick={increment}>Increment</button>
    </>
  )
}

export default withCount(DrugaKompa)