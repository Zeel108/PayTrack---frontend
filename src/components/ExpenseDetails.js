import'../Styles/CSS/Logincss.css'


const ExpenseDetail = () => {
   
   
                        {/*value={title}
                        onChange={(e) => setTitle(e.target.value)}*/}

                        {/*onClick={}>
                        {id ? "Update Note" : "Add Note"}*/}
   
    return (
        <div className="create">
            <div className="text-center">
                <h5>{/*id ? "Update a Note" : "Add a New Note"*/}</h5>
            </div>
            <form>
                <div className="form-group">
                    <label htmlFor="title">Note Title: <sup>*</sup></label>
                    <input 
                        type="text" 
                        className="form-control"
                        id="title"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="body">Note Description: <sup>*</sup></label>
                    <textarea 
                        id="body"
                        className="form-control">
                    </textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="category">Note Category:</label>
                    <select
                        id="category"
                        className="form-control"
                        >
                        <option value="programming">Programming</option>
                        <option value="vacation">Vacation</option>
                        <option value="meeting">Meeting</option>
                        <option value="blogging">Blogging</option>
                    </select>
                </div>

                <div className="text-center">
                    <button >
                    </button>
                </div>
            </form>
        </div>
    );
};
export default ExpenseDetail;