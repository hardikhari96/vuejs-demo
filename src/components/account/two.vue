<template>
    <div class="container-fluid">
        <div class="row">
                <div class="col-md-6 p-2">
                    <div class="border-custom pr-2 pl-2">
                        
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Account Code</label>
                                </div>
                                <div class="col-md-6">
                                    <input class="form-control" >
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Account Name</label>
                                </div>
                                <div class="col-md-6">
                                    <input class="form-control" >
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Alias</label>
                                </div>
                                <div class="col-md-6">
                                    <input class="form-control" >
                                </div>
                            </div>
                    </div>
                </div>

                 <div class="col-md-6">
                        <div class="p-2">
                            <div class="row border-custom">
                                <div class="col-md-6">
                                    <label>Account Type</label>
                                </div>
                                <div class="col-md-6">
                                    <input class="form-control" >
                                </div>
                                <div class="col-md-12 pr-3 pl-3 pt-3 d-flex justify-content-center">
                                    <div class="account m-3">
                                        <input type="radio"  name="type"> <span>Account</span>
                                    </div>
                                    <div class="group m-3">
                                        <input type="radio" name="type"> <span>Group</span>
                                    </div>    
                                </div>
                            </div>
                        </div>
                 </div>

        </div>
    </div>
</template>


<style scoped>
div.p-2>div.test>div.row{
    margin-top: 10px;
}
.border-custom{
    border: 1px dashed #676869;
    padding: 12px 6px;
    border-radius: 7px;
}
div.row > div.col-md-6 >div.border-custom> div.row{
    margin-top: 24px;
}

div.row > div.col-md-6 > div.row{
    margin-top: 20px;
}
.form-control{
    height:30px;
}
.textarea{
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
</style>