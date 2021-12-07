import { Loading } from '../../Loading'
import { LoadMoreBtn } from './styles'

interface ModalContentProps {
  isLoadingMore: boolean
  onLoadMore: () => void
}

export const LoadMore = ({ onLoadMore, isLoadingMore }: ModalContentProps) => {
  return (
    <div>
      <LoadMoreBtn onClick={onLoadMore}>
        {
          isLoadingMore ? <Loading hasLoading={true}/> : <p>Load more</p>
        }
      </LoadMoreBtn>
    </div>
  )
}
