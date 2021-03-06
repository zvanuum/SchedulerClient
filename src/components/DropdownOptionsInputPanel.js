import React from 'react';
import { FormControl, OverlayTrigger, Panel, Popover } from 'react-bootstrap';

const DropdownOptionsInputPanel = (props) => {
    return (<Panel bsStyle="warning">
        <Panel.Heading>Dropdown Options</Panel.Heading>
        <Panel.Body>
            <OverlayTrigger
                placement="right"
                overlay={(<Popover id="popover">Each line will appear as an option.</Popover>)}
            >
                <FormControl
                    onChange={(e) => props.onChange(e)}
                    componentClass="textarea"
                    placeholder="Input options..."
                    style={{
                        'resize': 'none',
                        'height': '160px'
                    }}
                />
            </OverlayTrigger>
        </Panel.Body>
    </Panel>)
}

export default DropdownOptionsInputPanel;
