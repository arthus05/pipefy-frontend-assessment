import Enzyme, { mount } from 'enzyme'
import { Card } from '../../components'
import waitForExpect from 'wait-for-expect'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { CardType } from 'pipefy-types';
import { Label } from '../../components/Card/styles';

Enzyme.configure({adapter: new Adapter()});

const mockedCard: CardType = {
  title: 'Michael Scott',
  dueDate: new Date('01-01-2020'),
  pipeName: 'Pipe',
  labels: [
    {
      name: 'label',
      color: 'green'
    }
  ],
  subtitles: [
    {
      name: 'name',
      value: 'value'
    }
  ]
}

describe('Card Component', () => {

  it('should render the correct card data', async () => {
    const wrapper = mount(
      <Card card={mockedCard}/>
    )

    await waitForExpect(() => {
      wrapper.update()
      expect(wrapper.props())
        .toMatchObject({
          card: mockedCard
        })
    })

    await waitForExpect(() => {
      wrapper.update()
      expect(wrapper.find({'data-testid': 'card-title'}).text())
        .toMatch(mockedCard.title)
    })

    mockedCard.labels.forEach(async label => {
      await waitForExpect(() => {
        wrapper.update()
        expect(wrapper.find(Label).prop('color'))
          .toBe(label.color)
      })

      await waitForExpect(() => {
        wrapper.update()
        expect(wrapper.find(Label).text())
          .toMatch(label.name)
      })

    })

    mockedCard.subtitles.forEach(async subtitle => {
      await waitForExpect(() => {
        wrapper.update()
        expect(wrapper.find({'data-testid': 'subtitle-name'}).text())
          .toMatch(subtitle.name)
      })

      await waitForExpect(() => {
        wrapper.update()
        expect(wrapper.find({'data-testid': 'subtitle-value'}).text())
          .toMatch(subtitle.value)
      })

    })

  })
})