import Enzyme, { mount } from 'enzyme'
import { Loading } from '../../components'
import waitForExpect from 'wait-for-expect'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({adapter: new Adapter()});

const mockedHasLoadingProps = {
  hasLoading: true,
  size: '2rem'
}

const mockedHasntLoadingProps = {
  hasLoading: false,
  size: '2rem'
}

describe('Loading Component', () => {

  it('should render loading when hasLoading is true', async () => {
    const wrapper = mount(
      <Loading {...mockedHasLoadingProps}/>
    )
    
    await waitForExpect(() => {
      wrapper.update()
      expect(wrapper.props())
        .toMatchObject(mockedHasLoadingProps)
    })

    await waitForExpect(() => {
      wrapper.update()
      expect(wrapper.find('div').length).toBe(1)
    })

    await waitForExpect(() => {
      wrapper.update()
      expect(wrapper.find('p').text()).toMatch('Loading')
    })
  })

  it("should not render loading when hasloading isn't true", async () => {
    const wrapper = mount(
      <Loading {...mockedHasntLoadingProps}/>
    )

    await waitForExpect(() => {
      wrapper.update()
      expect(wrapper.props())
        .toMatchObject(mockedHasntLoadingProps)
    })

    await waitForExpect(() => {
      wrapper.update()
      expect(wrapper.find('div').length).toBe(1)
    })

    await waitForExpect(() => {
      wrapper.update()
      expect(wrapper.find('p').length).toBe(0)
    })
  })
})