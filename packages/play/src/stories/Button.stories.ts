import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3'
import { fn, within, userEvent, expect } from '@storybook/test'
import { ErButton } from 'toy-element'

type Story = StoryObj<typeof ErButton> & { argTypes: ArgTypes }

const meta: Meta<typeof ErButton> = {
  title: 'Example/Button',
  component: ErButton,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: {
        type: 'select'
      },
      options: ['primary', 'success', 'warning', 'danger', 'info', '']
    },
    size: {
      control: {
        type: 'select'
      },
      options: ['large', 'default', 'small', '']
    },
    disabled: {
      control: 'boolean'
    },
    loading: {
      control: 'boolean'
    },
    useThrottle: {
      control: 'boolean'
    },
    throttleDuration: {
      control: 'number'
    },
    autofocus: {
      control: 'boolean'
    },
    tag: {
      control: {
        type: 'select'
      },
      options: ['button', 'a', 'div']
    },
    nativeType: {
      control: {
        type: 'select'
      },
      options: ['button', 'submit', 'reset', '']
    },
    icon: {
      control: {
        type: 'text'
      }
    },
    loadingIcon: {
      control: {
        type: 'text'
      }
    }
  },
  args: {
    onClick: fn()
  }
}

const container = (val: string) => `<div style="padding: 20px">${val}</div>`

export const Default: Story & { args: { content: string } } = {
  argTypes: {
    content: {
      control: {
        type: 'text'
      }
    }
  },
  args: {
    type: 'primary',
    content: 'Button'
    // round: true,
    // autofocus: false,
    // useThrottle: false,
    // icon: 'search',
    // loading: false
  },
  render: (args: { content: string }) => ({
    components: {
      ErButton
    },
    setup() {
      return { args }
    },
    template: container(`<er-button v-bind="args">${args.content}</er-button>`)
  })
}
export default meta
