import Switch from "react-switch";
type PlayingCardsSwitchProps  = {
    value: boolean,
    onSwitch: (newValue: boolean) => void
}



const PlayingCardsSwitch = (props: PlayingCardsSwitchProps)  => (
    <label>
    <Switch checked={props.value} onChange={props.onSwitch}/>
  </label>
)

export default PlayingCardsSwitch
