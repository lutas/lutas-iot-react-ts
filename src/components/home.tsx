import * as React from 'react'

type HomeProps = {};

export default class Home extends React.Component<HomeProps> {
    constructor(props: HomeProps) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div>
                Hello
            </div>
        );
    }
}