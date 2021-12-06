import { useQuery } from '@apollo/client';
import { CardRes, CardVars } from 'pipefy-service';
import { Card } from 'pipefy-types';
import { useState } from 'react';
import Modal from 'react-modal'
import { GET_CARD_BY_PIPE_ID } from '../../services/graphql/Queries'
import { LoadMore } from './LoadMore';
import { InsideContainer } from './styles';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(71, 71, 71, 0.75)'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '40px'
  },
};

interface CardsModalProps {
  modalIsOpen: boolean
  closeModal: () => void
  pipeId: number
}

export const CardsModal = ({ modalIsOpen, closeModal, pipeId }: CardsModalProps) => {
  const [isLoadingMore, setIsLoadingMore] = useState(false)

  const { loading, fetchMore, data, error } = useQuery<CardRes, CardVars>(GET_CARD_BY_PIPE_ID, {
    variables: {
      pipe_id: pipeId?.toString(),
      first: 3,
      after: null
    }
  })

  const cards = data?.cards.edges.map<Card>(e => ({
    title: e.node.title,
    pipeName: e.node.pipe.name,
    dueDate: e.node.due_date,
    labels: e.node.labels,
    subtitles: e.node.subtitles
  }))

  const pageInfo = data?.cards.pageInfo

  console.log(error)

  function onLoadMore() {
    if (pageInfo?.hasNextPage) {
      setIsLoadingMore(true)
      fetchMore({
        variables: {
          after: pageInfo.endCursor,
        },
        updateQuery: (previousResult: CardRes, { fetchMoreResult }): CardRes => {
          setIsLoadingMore(false)
          if (fetchMoreResult) {
            fetchMoreResult.cards.edges = [
              ...previousResult.cards.edges,
              ...fetchMoreResult.cards.edges,
            ]
            return fetchMoreResult
          } else {
            return previousResult
          }
        }
      });
    }
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      appElement={document.getElementById('root') || undefined}
      contentLabel="Pipe's card"
    >
      {
        loading ?
          <h1>Loading...</h1>
          : (
            <InsideContainer>
              {cards?.map((c, i) => <h1 key={i}>{c.title}</h1>)}
              {pageInfo?.hasNextPage ? 
                <LoadMore onLoadMore={onLoadMore} isLoadingMore={isLoadingMore}/> : <></>}
            </InsideContainer>
          )
      }

    </Modal>
  )
}
