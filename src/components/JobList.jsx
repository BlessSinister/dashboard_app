import { selectVisiblePositions } from 'store/positions/position-selectors'
import { JobPosition } from './JobPosition'
import { useDispatch, useSelector } from 'react-redux'
import { addFilter } from 'store/filters/filters-actions'
import { selectFilters } from 'store/filters/filter-selectors'

const JobList = () => {
  const currentFilters = useSelector(selectFilters)
  const data = useSelector((state) =>
    selectVisiblePositions(state, currentFilters)
  )
  const dispatch = useDispatch()

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter))
  }
  return (
    <div className="job-list">
      {data.map((item) => (
        <JobPosition
          key={item.id}
          {...item}
          handleAddFilter={handleAddFilter}
        />
      ))}
    </div>
  )
}

export { JobList }
