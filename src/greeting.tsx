declare let mountNode: any

type NamePropsRequired = {
  firstName: string,
  lastName: string,
}

type NamePropsOptional = {
  middleName: string,
}

type NameProps = NamePropsRequired & Partial<NamePropsOptional>;

class Greeting extends React.Component<NameProps, any> {
  static defaultProps: NamePropsOptional = {
    middleName: '-no-middle-name-'
  }
  constructor(props: NamePropsRequired & NamePropsOptional) {
    super(props);
  }
  render() {
    const { firstName, lastName, middleName } = this.props;

    return <div>Hello, {`${firstName} ${middleName} ${lastName}`}</div>
  }
}
ReactDOM.render(<Greeting firstName="John" lastName="Smith" />, mountNode)
