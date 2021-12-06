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
          isLoadingMore ? '...' : 'Load More'
        }

      </LoadMoreBtn>
    </div>
  )
}
