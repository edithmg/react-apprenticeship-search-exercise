import { render, fireEvent } from '@testing-library/react';
import Search from './Search';

describe('Search Component', () => {
    test('renders an input and a button', () => {
        const { getByRole } = render(<Search />)

        getByRole('textbox')
        getByRole('button', { value: 'Search' })
    })
    test('Input should be able to allow writing', () => {
        const { getByRole } = render(<Search />)
        const input = getByRole('textbox')

        fireEvent.change(input, {target: {value: 'Luke Skywalker'}})

        expect(input.value).toBe('Luke Skywalker')
    })
    test('Search button should show input writing on screen after pressing Search Button', () => {
        const { getByRole, getByText } = render(<Search resultList={['Luke Skywalker', 'R2-D2', 'Obi Wan Kenobi']}/>)
        const input = getByRole('textbox')
        const button = getByRole('button')

        fireEvent.change(input, {target: {value: 'R2-D2'}})
        fireEvent.click(button)

        getByText('R2-D2')
    })
    test('Search button shouldnt allow for empty requests', () => {
        const { getByRole, queryByRole } = render(<Search resultList={['Luke Skywalker', 'R2-D2', 'Obi Wan Kenobi']}/>)
        const input = getByRole('textbox')
        const button = getByRole('button')
        const list = queryByRole('list')

        fireEvent.change(input, {target: {value: ''}})
        fireEvent.click(button)


        expect(list).not.toBeInTheDocument()
        
    })

    test('Search result list should have no more than three results on screen', () => {
        const { getByRole } = render(<Search resultList={['Luke Skywalker', 'R2-D2', 'Obi Wan Kenobi', 'Luke', 'Luke2', 'Luke3']}/>)
        const input = getByRole('textbox')
        const button = getByRole('button')

        fireEvent.change(input, {target: {value: 'Luke'}})
        fireEvent.click(button)

        const list = getByRole('list')

        expect(list.childNodes.length).toBe(3)
    })
})




