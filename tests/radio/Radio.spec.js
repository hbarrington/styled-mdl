import Radio from 'radio/Radio';
import {
  RadioStyle,
  RadioButton,
  RadioLabel,
  OuterCircle,
  InnerCircle,
} from 'radio/Radio.style';

const props = {
  name: 'name',
  value: 'value',
  label: 'label',
  disabled: false,
  defaultChecked: false,
};

const render = mountComponent(Radio, props);

describe('<Radio />', () => {
  let radio;

  beforeEach(() => {
    radio = render();
  });

  it('renders a RadioStyle', () => {
    expect(radio.find(RadioStyle)).toBePresent();
  });

  it('renders a RadioLabel with the label text', () => {
    expect(radio.find(RadioLabel)).toBePresent();
    expect(radio.find(RadioLabel)).toHaveText(props.label);
  });

  it('renders a real input[type="radio"]', () => {
    expect(radio.find('input[type="radio"]')).toBePresent();
  });

  it('handles [prop] name, value, and defaultChecked', () => {
    radio.setProps({ defaultChecked: true });
    expect(radio.find('input[type="radio"]')).toHaveProp('name', props.name);
    expect(radio.find('input[type="radio"]')).toHaveProp('value', props.value);
    expect(radio.find('input[type="radio"]')).toHaveProp('defaultChecked', true);
  });

  it('handles [prop] disabled', () => {
    radio = render({ disabled: true });
    expect(radio.find(RadioButton)).toHaveProp('disabled', true);
    expect(radio.find(RadioLabel)).toHaveProp('disabled', true);
    expect(radio.find(OuterCircle)).toHaveProp('disabled', true);
    expect(radio.find(InnerCircle)).toHaveProp('disabled', true);
  });

  it('does not render a <RadioLabel> when there is no label', () => {
    radio.setProps({ label: undefined });
    expect(radio.find(RadioLabel)).not.toBePresent();
  });
});
