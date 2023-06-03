import Button from '../../dist/Button'
import Checkbox from '../../dist/Checkbox'
import Input from '../../dist/Input'

export default function DemoPage() {
  return (
    <div className='components-list'>
      <div className='components-row'>
        <Button>Button</Button>
        <Button className={['orange-button']}>Button</Button>
      </div>
      <div className='components-row'>
        <Checkbox name="" value={false} error={undefined}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Checkbox>
      </div>
      <div className='components-row'>
        <Checkbox name="" value={true} error={undefined}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Checkbox>
      </div>
      <div className='components-row'>
        <Checkbox name="" value={false} error={'Error message'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Checkbox>
      </div>
      <div className='components-row'>
        <Input label="Lorem ipsum" placeholder='Dolor sit amet' />
      </div>
      <div className='components-row'>
        <Input label="Lorem ipsum" placeholder='Dolor sit amet' error='Error message' />
      </div>
    </div>
  )
}