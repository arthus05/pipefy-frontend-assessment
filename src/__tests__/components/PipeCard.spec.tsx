import { Pipe } from 'pipefy-service'
import Enzyme, { mount } from 'enzyme'
import { PipeCard } from '../../components'
import waitForExpect from 'wait-for-expect'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({adapter: new Adapter()});

const mockedPipe: Pipe = {
  id: 333333,
  name: 'Michael Scott',
  cards_count: 1,
  color: 'blue',
  public: true
}

const mockedOnClick = jest.fn(() => { })

describe('PipeCard Component', () => {

  it('should render the right pipe data', async () => {
    const wrapper = mount(
      <PipeCard pipe={mockedPipe} onClick={mockedOnClick} />
    )

    await waitForExpect(() => {
      wrapper.update()
      expect(wrapper.props())
        .toMatchObject({
          pipe: mockedPipe,
          onClick: mockedOnClick
        })
    })

    await waitForExpect(() => {
      wrapper.update()
      expect(wrapper.find({"data-testid": "pipe-name" }).text())
        .toMatch(mockedPipe.name)
    })

    await waitForExpect(() => {
      wrapper.update()
      expect(wrapper.find({'data-testid': 'pipe-cards-count'}).text())
        .toMatch(mockedPipe.cards_count.toString())
    })

  })

})