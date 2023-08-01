'use client'
const Button = ({text}) => {
    return (
        <div className="bg-slate-500 text-cyan-600">
            <p>This is a Button component from design system repo (shared) you will able to find it in packages/gravity-design/component</p>
            <button type="button">{text || "Shared Button"}</button>
        </div>
    )
}

export default Button;