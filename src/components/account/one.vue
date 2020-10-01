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

        <div class="row ">
           
            <div class="col-md-6 p-2">
                       
                <div class="border-custom pr-2 pl-2">
                        <div class="row">
                            <div class="col-md-6">
                                <label>Last year op.bal.</label>
                            </div>
                             <div class="col-md-6 pr-0 row">
                                <div class="col-md-8 col-sm-8 col-8"><input class="form-control" ></div>
                                <div class="col-md-4 col-sm-4 col-4 pr-0 pl-0">
                                    <select class="form-control" style="height:30px;padding:0px 2px">
                                        <option>CR</option>
                                        <option>DR</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <label>Opening Balance</label>
                            </div>
                            <div class="col-md-6 pr-0 row">
                                <div class="col-md-8 col-sm-8 col-8"><input class="form-control" ></div>
                                <div class="col-md-4 col-sm-4 col-4 pr-0 pl-0">
                                    <select class="form-control" style="height:30px;padding:0px 2px">
                                        <option>CR</option>
                                        <option>DR</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <label>Credit Limit</label>
                            </div>
                            <div class="col-md-6">
                                <input class="form-control" >
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <label>Debit Limit</label>
                            </div>
                            <div class="col-md-6">
                                <input class="form-control" >
                            </div>
                        </div>
                         <div class="row">
                            <div class="offset-md-6 col-md-6">
                                <input type="checkbox" > <span> Ristrict Voucher entry beyond transection limits.</span>
                            </div>
                        </div>
                           <div class="row">

                            <div class="offset-md-6 col-md-6">
                                <input type="checkbox"  > <span> Maintain Recipt / Payment Bill By Bill</span>
                            </div>
                        </div>
                </div>
            </div>

            <div class="col-md-6">
                
                <div class="p-2">
                    <div class="border-custom test" style="margin-right: -15px;margin-left: -15px;">
                        <div class="row">
                            <div class="col-md-6">
                                <label>Total Credit</label>
                            </div>
                            <div class="col-md-6">
                                <input class="form-control" >
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <label>Total Debit</label>
                            </div>
                            <div class="col-md-6">
                                <input class="form-control" >
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <label>Closing Balance</label>
                            </div>
                            <div class="col-md-6">
                                <input class="form-control" >
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <label>Remark</label>
                            </div>
                            <div class="col-md-6">
                                <textarea class="textarea" rows="5">

                                </textarea>
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