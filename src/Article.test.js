import renderer from 'react-test-renderer'
import Article from './Article.js'

it ('successful render', () => {
    const tree = renderer
        .create(<Article content="Lorem Ipsum Dolor Amet Version 2" />)
        .toJSON()
    expect(tree).toMatchSnapshot()
})