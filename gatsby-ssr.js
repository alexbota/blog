const React = require('react');
const { AppProvider } = require('./src/context/GlobalContextProvider')

exports.wrapRootElement = ({ element }) => {
    return (
        <AppProvider>
            {element}
        </AppProvider>
    )
}