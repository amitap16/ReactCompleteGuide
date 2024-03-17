import Input from "./Input";

export default function NewProject() {
    return (
        <div>
            <menu>
                <ul>
                    <li><button>Cancel</button></li>
                    <li><button>Save</button></li>
                </ul>
            </menu>
            <div>
                <Input label="Title" />
                <Input label="Description" textArea />
                <Input label="Due Date" />
            </div>
        </div>
    );
}