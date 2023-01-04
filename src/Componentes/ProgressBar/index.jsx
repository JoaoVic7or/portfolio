import React from 'react'

export default function ProgressBar(props) {
    const { bgcolor, completed } = props;

    const containerStyles = {
        height: 20,
        width: '80%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        margin: 50
    }

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right'
    }

    const labelStyles = {
        color: 'white',
        fontWeight: 'bold'
    }
    return (
        <div style={containerStyles}>
            <div style={fillerStyles}>
                <span style={labelStyles}>{`${completed}%`}</span>
            </div>
            <ProgressBar bgcolor={'#ef6c00'} completed={props.porcentagem} />
        </div>
    )
}
