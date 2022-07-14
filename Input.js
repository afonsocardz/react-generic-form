export default function Input({ state, setState, text, type, name, results }) {
    const error = results && results.find(r => r.label === name)
    return (
      <div>
          <input value={value} placeholder={text} onChange={(e) => setState(e.target.value)} type={type ? type : "text"} />
          {error && <span>{error.text}</span>}
      </div>
    )
}
