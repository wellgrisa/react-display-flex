import './style.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const storyContainerStyle = {
  minHeight: 200,
  border: '1px solid MediumTurquoise',
  padding: 20,
}

export const decorators = [
  (Story) => (
    <div style={storyContainerStyle}>
      <Story />
    </div>
  ),
]
