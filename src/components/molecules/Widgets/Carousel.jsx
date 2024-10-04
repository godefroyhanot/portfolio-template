import React, { useState } from 'react'
import { Containers } from '../../atoms'
const Carousel = ({ content = [], infinite, ...props }) => {
    const [step, setStep] = useState(0)

    const addStep = () => {
        if (content.length > step + 1) {
            setStep(step + 1);
        }
        else {
            if (infinite) {
                setStep(0);
            }
        }
    }

    const withdrawStep = () => {
        if (step > 0) {
            setStep(step - 1);
        }
        else {
            if (infinite) {

                setStep(content.length - 1);
            }
        }
    }
    return (
        <Containers.Carousel
            handleAdd={addStep}
            handleWithdraw={withdrawStep}
            {...props}
        >
            {content[step]}
        </Containers.Carousel>
    )
}

export default Carousel