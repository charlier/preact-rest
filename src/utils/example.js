const Example = ({ title='', ...args }) => (
        <div { ...args }>
            {title}
        </div>
);

export default Example;
