import { Badge } from 'UI/Badge'
import { Card } from 'UI/Card'
import { Stack } from 'UI/Stack'
import { useDispatch, useSelector } from 'react-redux'
import { selectFilters } from 'store/filters/filter-selectors'
import { clearFilter, removeFilter } from 'store/filters/filters-actions'

const FilterPanel = () => {
  const currentFilters = useSelector(selectFilters)
  const dispatch = useDispatch()

  if (currentFilters.length === 0) {
    return null
  }
  const handleClearFilters = () => {
    dispatch(clearFilter())
  }
  const handleRemoveFilter = (filter) => {
    dispatch(removeFilter(filter))
  }
  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {currentFilters.map((item) => {
            return (
              <Badge
                variant="clearable"
                key={item}
                handleRemoveFilter={handleRemoveFilter}
              >
                {item}
              </Badge>
            )
          })}
        </Stack>

        <button className="link" onClick={handleClearFilters}>
          Clear
        </button>
      </div>
    </Card>
  )
}

export { FilterPanel }
