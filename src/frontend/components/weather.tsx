import * as React from 'react';

import { WeatherJSReport, WeatherJSResult } from '../../common/model/weather';
import API from '../service/api';

type WeatherProps = {};
type WeatherState = {
    report: WeatherJSReport | null
};

export default class Weather extends React.Component<WeatherProps, WeatherState> {
    constructor(props: WeatherProps) {
        super(props);

        this.state = {
            report: null
        };
    }

    public componentDidMount(): void {

        console.log('Getting weather from frontend');
        API.getWeather().then((val: WeatherJSResult) => {
            console.log('got weather');
            this.setState({
                report: val.current
            });
        });
    }

    public render(): JSX.Element {
        if (this.state.report === null) {
            return <div />
        }

        return (
            <div>
            {this.state.report!.day}
            </div>
        );
    }
}