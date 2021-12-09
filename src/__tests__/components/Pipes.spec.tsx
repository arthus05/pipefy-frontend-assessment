import { MockedProvider } from '@apollo/client/testing'
import { Pipes } from '../../components'
import Enzyme, { mount } from 'enzyme'
import waitForExpect from 'wait-for-expect'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { GET_PIPES_BY_ORGANIZATION } from '../../hooks'

Enzyme.configure({adapter: new Adapter()});

export const mockPipeListData = {
  request: {
    query: GET_PIPES_BY_ORGANIZATION,
    variables: { id: 300562393 }
  },

  result: {
    data: {
      organization: {
        id: 300562393,
        name: 'Pipefy FrontEnd - Assessment',
        pipes: [
          {
            cards_count: 6,
            color: 'blue',
            id: '301735351',
            name: 'IT Service Desk',
            public: true
          },
          {
            cards_count: 8,
            color: 'blue',
            id: '398776389',
            name: 'IT Service Desk',
            public: true
          }
        ],
      }
    },

  }

}

const organizationId = process.env.REACT_APP_PIPEFY_ORGANIZATION_ID

describe('Pipes Component', () => {

  it('should say when there is no data', async () => {
    const wrapper = mount(
      <MockedProvider mocks={[]} addTypename={false}>
        <Pipes organizationId={organizationId ? parseInt(organizationId) : undefined}/>
      </MockedProvider>
    )

    await waitForExpect(() => {
      wrapper.update()
      expect(wrapper.children.length)
        .toBe(1)
    })

    await waitForExpect(() => {
      wrapper.update()
      expect(wrapper.find({'data-testid': 'no-pipes-found'}).at(0).text())
        .toMatch(/^No pipes found for this Organization$/)
    })

  })

  it('should render the right amount of PipeCard Components when there is data', async () => {
    const wrapper = mount(
      <MockedProvider mocks={[mockPipeListData]} addTypename={false}>
        <Pipes organizationId={300562393}/>
      </MockedProvider>
    )
    
    await waitForExpect(() => {
      wrapper.update()
      
      expect(wrapper.find('PipeCard').length)
        .toBe(mockPipeListData.result.data.organization.pipes.length)
    })
  })

})

