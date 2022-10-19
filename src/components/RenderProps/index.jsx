import React from 'react'
import Blog from './Blog'
import Newsletter from './Newsletter'
import Text from './Text'

const RenderProps = () => {
    return (
        <div>
            <Text
                renderProps={(value) => (
                    <div>
                        <Newsletter value={value} />
                        <Blog value={value} />
                    </div>
                )}
            />
        </div>
    )
}

export default RenderProps
