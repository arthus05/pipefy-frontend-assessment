import { MockedProvider } from '@apollo/client/testing'
import Enzyme, { mount } from 'enzyme'
import { Card, CardsModal } from '../../components'
import waitForExpect from 'wait-for-expect'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { GET_CARD_BY_PIPE_ID } from '../../hooks'

Enzyme.configure({adapter: new Adapter()});

export const mockCardListData = {
  request: {
    query: GET_CARD_BY_PIPE_ID,
    variables: {
      pipe_id: '33333',
      first: 3,
      after: null
    }
  },

  result: {
    data: {
      cards: {
        pageInfo: {
          endCursor: '9saodikfas09dflaskdjf',
          hasNextPage: true
        },
        edges: [
          {
            node: {
              title: 'Michael Scott',
              due_date: new Date('01-01-2020'),
              pipe: {
                name: 'Pipe'
              },
              labels: [
                {
                  name: 'label',
                  color: 'blue'
                }
              ],
              subtitles: [
                {
                  name: 'Name1',
                  value: 'value1'
                }
              ] 
            }
          },
          {
            node: {
              title: 'Pam Beesly',
              due_date: new Date('01-01-2020'),
              pipe: {
                name: 'Pipe'
              },
              labels: [
                {
                  name: 'label',
                  color: 'red'
                }
              ],
              subtitles: [
                {
                  name: 'Name2',
                  value: 'value2'
                }
              ] 
            }
          },
          {
            node: {
              title: 'Dwitch Schrute',
              due_date: new Date('01-01-2020'),
              pipe: {
                name: 'Pipe'
              },
              labels: [
                {
                  name: 'label',
                  color: 'yellow'
                }
              ],
              subtitles: [
                {
                  name: 'Name3',
                  value: 'value3'
                }
              ] 
            }
          }
        ]
      }
    }
  }
}

const mockedCardsModalProps = {
  modalIsOpen: true,
  closeModal: jest.fn(() => {}),
  pipeId: 33333
}

describe('CardsModal Component', () => {
  
  it('should say when there is no data', async () => {
    const wrapper = mount(
      <MockedProvider mocks={[]} addTypename={false}>
        <CardsModal {...mockedCardsModalProps}/>
      </MockedProvider>
    )

    await waitForExpect(() => {
      wrapper.update()
      expect(wrapper.find({'data-testid': 'no-card-data'}).length)
        .toBe(1)
    })

    await waitForExpect(() => {
      wrapper.update()
      expect(wrapper.find({'data-testid': 'no-card-data'}).text())
        .toBe('There is no cards from this pipe')
    })

  })

  it('should render with the correct props', async () => {
    const wrapper = mount(
      <MockedProvider mocks={[mockCardListData]} addTypename={false}>
        <CardsModal {...mockedCardsModalProps}/>
      </MockedProvider>
    )

    await waitForExpect(() => {
      wrapper.update()
      expect(wrapper.props())
        .toMatchObject(mockedCardsModalProps)
    })
  })

  it('should render correct amount of cards when there is data', async () => {
    const wrapper = mount(
      <MockedProvider mocks={[mockCardListData]} addTypename={false}>
        <CardsModal {...mockedCardsModalProps}/>
      </MockedProvider>
    )

    await waitForExpect(() => {
      wrapper.update()
      expect(wrapper.find(Card))
        .toHaveLength(mockCardListData.result.data.cards.edges.length)
    })
  })

})