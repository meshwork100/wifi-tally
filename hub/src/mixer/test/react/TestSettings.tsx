import React from 'react'
import MixerSettingsWrapper from '../../../components/config/MixerSettingsWrapper'
import { socket } from '../../../hooks/useSocket'
import { SettingsProps } from '../../interfaces'

type TestSettingsProps = SettingsProps & {}

function TestSettings(props: TestSettingsProps) {
    const handleSave = () => {
        if (props.id !== "test") {
            console.warn(`Changing id prop of TestSettings is not supported. But got ${props.id}.`)
        } else {
            socket.emit('config.change.test', "test")
        }
    }

    return (<MixerSettingsWrapper 
        title="Test Configuration"
        description="A mixer used for automatic testing. You should never have to select it manually."
        onSave={handleSave}
    ></MixerSettingsWrapper>)
}

TestSettings.defaultProps = {
    id: "test",
    label: "Test Mixer"
}

export default TestSettings
