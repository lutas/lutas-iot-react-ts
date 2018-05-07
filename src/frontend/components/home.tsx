import * as React from 'react'
import Config from "../../common/config";

import Weather from './weather';

type HomeProps = {};

export default class Home extends React.Component<HomeProps> {
    constructor(props: HomeProps) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div>
                Hello, connecting to backend on port {Config.port}

                <h1>Weather</h1>
                <Weather />
            </div>
        );
    }
}